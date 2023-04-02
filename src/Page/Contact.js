import Rail from "../Component/Rail";
import "../App.css";
import { useState } from "react";
import List from "./List";
import { uid } from "uid";

const Contact = () => {
  const [Contact, setContacts] = useState([
    {
      id: 1,
      nama: "fian",
      saran: "bla bla bla",
    },
    {
      id: 2,
      nama: "yuda",
      saran: "kokokokokk",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  });

  const [formData, setFormData] = useState({
    nama: "contoh",
    saran: "sdddddd",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.nama] = e.target.value;
    setFormData(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("oke");

    if (formData.nama === "") {
      return false;
    }
    if (formData.saran === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((Contact) => {
        if (Contact.id === isUpdate.id) {
          Contact.nama = formData.nama;
          Contact.saran = formData.saran;
        }
      });
    } else {
      data.push({ id: uid(), nama: formData.nama, saran: formData.saran });
    }
    // menambahkan saran

    let data = [...Contact];

    setContacts(data);
    setFormData({ nama: "", saran: "" });
  }

  function handleEdit(id) {
    let data = [...Contact];
    let foundData = data.find((Contact) => Contact.id === id);
    setFormData({ name: foundData.nama, saran: foundData.saran });
    setIsUpdate({ id: null, status: false });
  }

  return (
    <>
      <div className="flex ">
        <Rail />
        <div className=" sebelah left-[367px] relative width-content h-screen">
          <div className="App">
            <h1 className="px-3 py-3">saran</h1>

            <form onSubmit={handleSubmit} className="px-3 py-4">
              <div className="form-group">
                <label htmlFor="">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.nama}
                  name="nama"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="">saran</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.saran}
                  name="saran"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Save
                </button>
              </div>
            </form>

            <List handleEdit={handleEdit} data={Contact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
