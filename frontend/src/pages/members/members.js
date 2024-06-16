import React from 'react'
import styles from './members.module.css'
export default function members() {
  return (
    <div className={styles.members_container}>

        <table className={styles.members_table}>
            <thead className={styles.table_head}>
                <tr>
                    <th> username</th>
                    <th> Email</th>
                    <th> Created At</th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> username 1</td>
                    <td> email 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> username 2</td>
                    <td> email 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> username 3</td>
                    <td> email 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>

                <tr>
                    <td> members 1</td>
                    <td> User 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> members 2</td>
                    <td> User 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> members 3</td>
                    <td> User 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                </tbody>
        </table>
        
    </div>
  )
}
