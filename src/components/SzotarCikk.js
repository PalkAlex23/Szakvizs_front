import React, { useContext, useEffect } from "react";
import AdatokContext from "../contexts/AdatokContext";

function SzotarCikk() {
  const { szavakLista, setSzavakLista, temaLista, setTemaLista, getAdat } =
    useContext(AdatokContext);

  useEffect(() => {
    getAdat("/api/szavak", setSzavakLista);
    getAdat("/api/tema", setTemaLista);
  }, []);

  return (
    <article>
      <h2 className="text-start p-3">Szavak</h2>
      <div className="container">
        <select class="form-select" aria-label="Default select example">
          <option selected>Válassz témát!</option>
          <>
            {temaLista.map((elem) => {
              return (
                <option key={elem} value={elem.id}>
                  {elem.temanev}
                </option>
              );
            })}
          </>
        </select>
        <div className="row">
          <div className="col-md">
            {" "}
            <b>ANGOL</b>{" "}
          </div>
          <div className="col-md">
            <b>MAGYAR</b>
          </div>
          <div className="col-md">visszajelzés</div>
        </div>
        <>
          {szavakLista.map((elem) => {
            return (
              <div className="row" key={elem}>
                <div className="col-md">{elem.angol}</div>
                <div className="col-md">
                  {" "}
                  <input
                    type="text"
                    name="magyar"
                    id="text_input"
                    placeholder="Írja be a magyar megfelelőjét!"
                  />{" "}
                </div>
                <div className="col-md">.</div>
              </div>
            );
          })}
        </>
      </div>
    </article>
  );
}

export default SzotarCikk;
