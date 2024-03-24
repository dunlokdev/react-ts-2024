import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import User from "./User";

export interface IUser {
  name: string;
  age: number | string;
  city: string;
}

const local: string[] = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Biên Hòa",
  "Nha Trang",
  "Bắc Ninh",
  "Vũng Tàu",
  "Quy Nhơn",
  "Phan Rang",
  "Đà Lạt",
];

const Video10 = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [city, setCity] = useState<string>("");

  const [userList, setUserList] = useState<IUser[] | null>([
    { name: "Mark", age: 20, city: "Ha Noi" },
    { name: "Jacob", age: 25, city: "HCM" },
    { name: "Larry", age: 30, city: "Da Lat" },
  ]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  const resetForm = () => {
    setName("");
    setAge(0);
    setCity("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !age || !city) {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }

    setUserList([
      ...(userList as IUser[]),
      {
        name: name,
        age: age,
        city: city,
      },
    ]);
    resetForm();
  };

  return (
    <div>
      <User name={name} age={age} city={city} className="mb-5" />
      <div className="d-flex align-items-center justify-content-center">
        <Form onSubmit={handleSubmit} className="container">
          <Form.Group className="mb-3">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="name"
              placeholder="Nhập họ tên"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tuổi</Form.Label>
            <Form.Control
              type="age"
              placeholder="Nhập tuổi"
              value={age || ""}
              onChange={handleAgeChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select aria-label="" value={city} onChange={handleCityChange}>
              <option>Chọn thành phố</option>
              {local.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button type="submit">Gửi</Button>
          </div>
        </Form>
      </div>

      <h2 className="mt-5">Kết quả</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Thành phố</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Video10;
