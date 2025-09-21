import React from "react";
import { UserType } from "@/Types/UserTypes";
import { converUTCtoLoalTime } from "@/Utils/helper";
import { UsersTable, ProfileImage } from "./UserList.styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type UsersListProps = {
  Users: Array<UserType>;
  onEdit?: (user: UserType) => void;
  onDelete?: (user: UserType) => void;
};

export default function UsersList({ Users, onEdit, onDelete }: UsersListProps) {
  return (
    <UsersTable>
      <thead>
        <tr>
          <th>Index</th>
          <th>Profile Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Users.length > 0 ? (
          Users.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>
                {user.profilePic ? (
                  <ProfileImage src={user.profilePic} alt={user.firstName} />
                ) : (
                  "-"
                )}
              </td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber || "-"}</td>
              <td>{converUTCtoLoalTime(user.createdAt)}</td>
              <td>{converUTCtoLoalTime(user.updatedAt)}</td>
              <td>
                <EditOutlined onClick={() => onEdit?.(user)} className="edit" />
                <DeleteOutlined
                  onClick={() => onDelete?.(user)}
                  className="delete"
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} style={{ textAlign: "center", padding: "20px" }}>
              No users found
            </td>
          </tr>
        )}
      </tbody>
    </UsersTable>
  );
}
