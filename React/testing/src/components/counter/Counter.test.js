import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

// create-react-app ile projeyi oluşturduğumuzda karşımıza gelen test dosyası
// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//    render(<App />);
//    const linkElement = screen.getByText(/learn react/i);
//    expect(linkElement).toBeInTheDocument();
// });

// button'a basıldığında sayı artmalı
// -malı, -meli
// it should be a valid address

// it("increase btn",() => {

// })

//************************ */

// test("increase btn", () => {
//    render(<Counter />);

//    const count = screen.getByText("0");
//    const increaseBtn = screen.getByText("Increase");

//    userEvent.click(increaseBtn);
//    expect(count).toHaveTextContent("1");
// });

// test("decrease btn", () => {
//    render(<Counter />);

//    const count = screen.getByText("0");
//    const decreaseBtn = screen.getByText("Decrease");

//    userEvent.click(decreaseBtn);
//    expect(count).toHaveTextContent("-1");
// });

//***************************** */

describe("Counter Tests", () => {
   let increaseBtn, decreaseBtn, count;

   beforeEach(() => {
      render(<Counter />);
      count = screen.getByText("0");
      increaseBtn = screen.getByText("Increase");
      decreaseBtn = screen.getByText("Decrease");

      console.log("her test'den önce ben çalışacağım");
   });

   beforeAll(() => {
      console.log("hiç bir test başlamadan önce sadece bir kere çalışacağım");
   });

   afterEach(() => {
      console.log("her test'den sonra çalışacağım");
   });

   afterAll(() => {
      console.log("tüm testler bittikten sonra sadece bir kere çalışacağım");
   });

   test("increase btn", () => {
      userEvent.click(increaseBtn);
      expect(count).toHaveTextContent("1");
   });

   test("decrease btn", () => {
      userEvent.click(decreaseBtn);
      expect(count).toHaveTextContent("-1");
   });
});
