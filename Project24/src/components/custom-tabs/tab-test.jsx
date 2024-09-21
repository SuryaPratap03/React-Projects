import Tabs from "./tabs"

export default function TabTest(){
    const tabsArray = [
        {
            label: 'Tab 1',
            content : <div>Content For Tab 1</div>,
        },
        {
            label: 'Tab 2',
            content : <div>Content For Tab 2</div>,
        },
        {
            label: 'Tab 3',
            content: <div>Content For Tab 2</div>
        }
    ]

    return <Tabs tabarray={tabsArray}/>
}