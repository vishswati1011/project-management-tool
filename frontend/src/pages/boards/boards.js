import React from 'react'
import styles from './boards.module.css'
export default function Boards() {
  return (
    <div className={styles.board_container}>

        <table className={styles.board_table}>
            <thead className={styles.table_head}>
                <tr>
                    <th> Board</th>
                    <th> Created By</th>
                    <th> Created At</th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Board 1</td>
                    <td> User 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Board 2</td>
                    <td> User 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Board 3</td>
                    <td> User 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>

                <tr>
                    <td> Board 1</td>
                    <td> User 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Board 2</td>
                    <td> User 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Board 3</td>
                    <td> User 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>


                               </tbody>
        </table>
        
    </div>
  )
}
