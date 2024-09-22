import React, { useEffect, useState } from 'react'

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setInputValue(event.target.value);
    if (query.length > 0 && users && users.length > 0) {
      const filteredResults = users.filter(user =>
        user.toLowerCase().includes(query)
      );
      setRelatedUsers(filteredResults);
    } else {
      setRelatedUsers([]); // Clear related users if the query is empty
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (data && data.users) {
        const usernames = data.users.map(item => item.firstName);
        setUsers(usernames);
        setLoading(false);
      }
    } catch (errors) {
      console.log(errors);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function afterclick(user){
    setInputValue(user);
    setRelatedUsers([]);
  }
  return (
    <div className="p-4 max-w-lg mx-auto">
      <input
        placeholder="Enter your keyword here"
        type="text"
        onChange={handleChange}
        value={inputValue}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Display suggestions */}
      {relatedUsers && relatedUsers.length > 0 && (
        <ul className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {relatedUsers.map((user, index) => (
            <li
              key={index}
              onClick={() => afterclick(user)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {user}
            </li>
          ))}
        </ul>
      )}

      {/* Show loading status */}
      {loading && <p className="text-gray-500 mt-2">Loading users...</p>}
    </div>
  );
};

export default SearchAutoComplete;
