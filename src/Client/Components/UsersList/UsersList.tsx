import React from "react";
import { UserType } from "@/Types/UserTypes";
import { converUTCtoLoalTime } from "@/Utils/helper";
import { UsersTable } from "./UserList.styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function UsersList({ Users }: { Users: Array<UserType> }) {
  return (
    <UsersTable>
      <thead>
        <th>Index</th>
        <th>Profile Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Created At Date</th>
        <th>Updated At Date</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {Users.length > 0 &&
          Users.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>{user.profilePic || "-"}</td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber || "-"}</td>
              <td>{converUTCtoLoalTime(user.createdAt)}</td>
              <td>{converUTCtoLoalTime(user.updatedAt)}</td>
              <td>
                <EditOutlined />
                <DeleteOutlined />
              </td>
            </tr>
          ))}
      </tbody>
    </UsersTable>
  );
}
