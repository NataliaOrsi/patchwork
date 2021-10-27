import React from "react";
import "./Photos.css";

export default function Photos() {
    return (
      <section className="Photos">
        <div className="container">
          <div className="row img-fluid">
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/864/original/028.jpg?1635322952"
                alt="colcha em patchwork"
              />
            </div>
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/867/original/20191218_105406.jpg?1635323808"
                alt="bolsa pequena em patchwork"
                className="middle"
              />
            </div>
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/866/original/20171214_140303.jpg?1635323103"
                alt="bolsa grande em patchwork"
              />
            </div>
          </div>
          <div className="row img-fluid">
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/865/original/264.jpg?1635323041"
                alt="almofadas em patchwork"
              />
            </div>
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/869/original/20201217_125919.jpg?1635324019"
                alt="americanos em patchwork"
                className="middle"
              />
            </div>
            <div className="col-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/868/original/20191224_111304.jpg?1635323979"
                alt="toalha de natal em patchwork"
              />
            </div>
          </div>
        </div>
      </section>
    );
}