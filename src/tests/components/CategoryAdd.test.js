import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { CategoryAdd } from "../../components/CategoryAdd";

describe("Pruebas en <CategoryAdd />", () => {
  // dependencias
  const setCategories = jest.fn();

  // contenido del componente
  let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  });

  test("debe de mostrar el componente <CategoryAdd /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar el texto del input", () => {
    const value = "vegeta";
    const input = wrapper.find("input");

    // simular el evento
    input.simulate("change", { target: { value } });
  });

  test("No debe de enviar la información con submit", () => {
    const form = wrapper.find("form");

    // simular el evento
    form.simulate("submit", { preventDefault() {} });

    // validar que setCategories no haya sido llamada
    // para ello se debe reiniciar el wrapper en el beforeEach
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    // simular el inputChange
    const value = "vegeta";
    // const input = wrapper.find("input");
    // input.simulate("change", { target: { value } });
    wrapper.find("input").simulate("change", { target: { value } });

    // simular el submit
    // const form = wrapper.find("form");
    // form.simulate("submit", { preventDefault() {} });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    // es igual al anterior, pero se puede indicar el número de veces que fue llamada la función
    expect(setCategories).toHaveBeenCalledTimes(1);
    // validar que la función fue llamada con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // el valor del imput debe de estar vacío o cadena vacía
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
