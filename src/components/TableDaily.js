import styles from './Table.module.css';

function TableDaily({ list, st }) {

  console.log(list)

  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
       <h2>Daily alerts</h2>
       <p className="count">{list.length} records returned for {st}.</p>
      <table className={styles.table}>
        <thead>
          <tr className="tableHeader">
          <th>Event</th>
            <th>Headline</th>
            <th>Area</th>
            <th>Certainty</th>
            <th>Effective</th>
            <th>Ends</th>
            <th>Response</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Urgency</th>
          </tr>
        </thead>
         <tbody>
           {list &&
            list.map((item) => ( 
              <tr key={item.id}>
                <td><strong>{item.properties.event}</strong></td>
                <td>{item.properties.headline}</td>
                <td>{item.properties.areaDesc}</td>
                <td>{item.properties.certainty}</td>
                <td>{item.properties.effective}</td>
                <td>{item.properties.ends}</td>
                <td>{item.properties.response}</td>
                <td>{item.properties.severity}</td>
                <td>{item.properties.status}</td>
                <td>{item.properties.urgency}</td>
              </tr>

           ))} 
        </tbody> 
      </table>
    </div>
  );
}

export default TableDaily;