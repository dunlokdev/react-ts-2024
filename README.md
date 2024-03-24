### Ôn tập Typescript

- Khai báo biến thông thường

```ts
const name: string = "Duong My Loc";

// Tuy nhiên với các kiểu dữ liệu đơn giản thì mặc định nếu không khai báo TS sẽ tự gán dựa vào value của biến

const name = "Duong My Loc"; // Biến name có type là: string
```

- Khai báo biến dạng Union

```ts
let id: string | number = 1;
id = "1";
// Giải thích: Biến id có thể là string hoặc number
```

- Khai báo biến Object

```ts
let user: { name: string; age: number } = {
  name: "Duong My Loc",
  age: 20,
};

// Hoặc

let user: {
  name: string;
  age: number;
};

user = {
  name: "Duong My Loc",
  age: 20,
};

// Hoặc
let user: {
  name: string;
  age: number;
} = {
  name: "Duong My Loc",
  age: 20,
};
```

- Cách viết OOP

```ts
// Cách 1: Sử dụng Type
type TUser = {
  name: string;
  age: number;
};

const user: TUser = {
  name: "Duong My Loc",
  age: 20,
};

// Cách 2: Sử dụng Interface
interface IUser {
  name: string;
  age: number;
}

const user: IUser = {
  name: "Duong My Loc",
  age: 20,
};
```

### Định nghĩa state với Typescript

```ts
const [state, setState] = useState(value);
// Thực tế thì TS sẽ tự gán type cho state dựa vào value

// Kiểu chuẩn
const [state, setState] = useState<string>("");

// Tuy nhiên với biến là kiểu Oebject thì cần phải khai báo type bởi TS không thể tự gán được
```
