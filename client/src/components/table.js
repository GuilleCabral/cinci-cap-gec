import React from 'react';

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         holidays: [
            { day: 'Friday', date: 'Jan. 1', holiday: "New Year's Day", event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Monday', date: 'Jan. 18', holiday: 'Martin Luther King Jr. Day', event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Monday', date: 'Feb. 15', holiday: 'Presidents Day', event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Monday', date: 'May 31', holiday: 'Memorial Day', event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Monday', date: 'July 5', holiday: 'Independence Day', event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Monday', date: 'Sept. 6', holiday: 'Labor Day', event:"Event has passed. We can't wait to see you next year!" },
            { day: 'Thursday', date: 'Nov. 11', holiday: 'Veterans Day', event: [<a href="https://www.cincinnati.com/story/entertainment/2018/11/05/things-do-week-cincinnati-nov-5-november-6-7-8-9-10-11/1895786002/">Art on Vine, Blue Ash Montgomery Symphony, Harvest Pancake Brunch & more</a>] },
            { day: 'Thursday', date: 'Nov. 25', holiday: 'Thanksgiving', event:[<a href="https://m.facebook.com/events/marcum-park/2021-hamilton-thanksgiving-day-5k-for-young-lives/1771633099686212/">Hamilton 5K race</a>] },
            { day: 'Friday', date: 'Nov. 26', holiday: 'Day after Thanksgiving', event:[<a href="https://local.aarp.org/event/exhibition-in-a-new-light-treasures-from-the-taft-2021-11-26-cincinnati-oh.html">Art exhibition</a>] },
            { day: 'Friday', date: 'Dec. 24', holiday: 'Christmas', event: [<a href="https://www.christmasnightsoflights.com/cincinnati">Nights of lights</a>] }
         ]
      }
   }
 
   renderTableHeader() {
      let header = Object.keys(this.state.holidays[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
 
   renderTableData() {
      return this.state.holidays.map((holidays, index) => {
         const { day, date, holiday, event } = holidays

         return (
            <tr key={day}>
               <td>{day}</td>
               <td>{date}</td>
               <td>{holiday}</td>
               <td id="eventRow">{event}</td>
            </tr>
         )
      })
   }
 
   render() {
      return (
         <div id="outCont" className="container">
            <h1 id='title'>Cincinnati Holidays</h1>
            <table id='holidays'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table