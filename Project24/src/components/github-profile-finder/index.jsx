import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [Username, setUsername] = useState("");
  const [Userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  async function fetchGithubUserData() {
    if (!Username) return; // Prevent empty fetch
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${Username}`);
    const data = await res.json();
    
    console.log(data);
    if (data) {
      setUserdata(data); // Set the correct user data
      setLoading(false);
    }
  }

  return (
    <div className="github-profile-container p-6 bg-gray-100 min-h-screen">
      <div className="input-wrapper flex justify-center items-center mb-6">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md p-2 shadow-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSubmit}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {/* Display User Data */}
      {Userdata && (
        <div className="user-info bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <img
              src={Userdata.avatar_url}
              alt={`${Userdata.login}'s avatar`}
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">{Userdata.login}</h2>
              <a
                href={Userdata.html_url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
          <div className="info-section">
            <p><strong>Name:</strong> {Userdata.name || "Not available"}</p>
            <p><strong>Bio:</strong> {Userdata.bio || "Not available"}</p>
            <p><strong>Public Repos:</strong> {Userdata.public_repos}</p>
            <p><strong>Followers:</strong> {Userdata.followers}</p>
            <p><strong>Following:</strong> {Userdata.following}</p>
            <p><strong>Location:</strong> {Userdata.location || "Not available"}</p>
            <p><strong>Company:</strong> {Userdata.company || "Not available"}</p>
            <p><strong>Blog:</strong> 
              {Userdata.blog ? (
                <a
                  href={Userdata.blog}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Userdata.blog}
                </a>
              ) : "Not available"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
