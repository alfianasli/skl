import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
      {data.map((Contact) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{Contact.nama}</h5>
              <div>
                <button
                  onclick={() => handleEdit(Contact.id)}
                  className="btn btn-sm btn-link"
                >
                  Edit
                </button>
                <button
                  onclick={() => handleDelete(Contact.id)}
                  className="btn btn-sm btn-link"
                >
                  Del
                </button>
              </div>
            </div>
            <p className="mb-1">{Contact.message}</p>
          </div>
        );
      })}

      {/* <div className=" mt-4  ml-8">
        <div className="list-group-item list-group-item-action flex flex-col ">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Alex Pick</h5>
            <div>
              <button className="btn btn-sm btn-link ml-4">Edit</button>
              <button className="btn btn-sm btn-link ml-4">Del</button>
            </div>
          </div>
          <p className="mb-1">awoakwowak</p>
        </div>
      </div> */}
    </div>
  );
}
