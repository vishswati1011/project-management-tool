import React from 'react'
import styles from './workspace.module.css'
export default function workspace() {
  return (
    <div className={styles.workspace_container}>

        <table className={styles.workspace_table}>
            <thead className={styles.table_head}>
                <tr>
                    <th> Workspace</th>
                    <th> Created By</th>
                    <th> Created At</th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Workspace 1</td>
                    <td> User 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Workspace 2</td>
                    <td> User 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Workspace 3</td>
                    <td> User 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>

                <tr>
                    <td> Workspace 1</td>
                    <td> User 1</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Workspace 2</td>
                    <td> User 2</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td> Workspace 3</td>
                    <td> User 3</td>
                    <td> 12-12-2021</td>
                    <td> Active</td>
                </tr>
                </tbody>
        </table>
        
    </div>
  )
}
