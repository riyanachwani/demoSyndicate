import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
export default function Background() {
  const [color, setColor] = useState("#AAD5FF");
  const [getColor, setGetColor] = useState("");
  const customColor = {
    color1: "#2b2c34",
    color2: "#e3f6f5",
    color3: "#ff8e88",
    color4: "#d1d1e9",
    color5: "#d6bcfa",
  };
  const fetchColor = (selectedColor) => {
    setGetColor(selectedColor);
    console.log(getColor);
  };
  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5 ">
          <div className="my-2 d-flex justify-content-between">
            <button className="btn btn-dark">Preview</button>
          </div>
          {/* <!-- Call to action--> */}
          <aside class=" border rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex flex-column flex-xl-row text-center text-xl-start"></div>

            <div class="row align-items-md-stretch">
              <div class="col-md-6">
                <div
                  class="h-100 p-5 text-white rounded-5"
                  style={{ backgroundColor: color }}
                >
                  <div className="d-flex my-3 justify-content-center bg-light p-3 rounded-5 flex-wrap">
                    <div className="simple-colors d-flex flex-wrap">
                      <div
                        className="color-box rounded-circle m-2"
                        style={{
                          backgroundColor: customColor.color1,
                          width: "60px",
                          height: "60px",
                        }}
                        onClick={() => fetchColor(customColor.color1)}
                      ></div>
                      <div
                        className="color-box rounded-circle m-2"
                        style={{
                          backgroundColor: customColor.color2,
                          width: "60px",
                          height: "60px",
                        }}
                        onClick={() => fetchColor(customColor.color2)}
                      ></div>
                      <div
                        className="color-box rounded-circle m-2"
                        style={{
                          backgroundColor: customColor.color3,
                          width: "60px",
                          height: "60px",
                        }}
                        onClick={() => fetchColor(customColor.color3)}
                      ></div>
                      <div
                        className="color-box rounded-circle m-2"
                        style={{
                          backgroundColor: customColor.color4,
                          width: "60px",
                          height: "60px",
                        }}
                        onClick={() => fetchColor(customColor.color4)}
                      ></div>{" "}
                      <div
                        className="color-box rounded-circle m-2"
                        style={{
                          backgroundColor: customColor.color5,
                          width: "60px",
                          height: "60px",
                        }}
                        onClick={() => fetchColor(customColor.color5)}
                      ></div>
                    </div>
                  </div>
                  <div className="simple-colors d-flex justify-content-center">
                    <HexColorPicker color={color} onChange={setColor} />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-5">
                  <h2>Background Colors</h2>
                  <p>
                    Or, keep it light and add a border for some added definition
                    to the boundaries of your content. Be sure to look under the
                    hood at the source HTML here as we've adjusted the alignment
                    and sizing of both column's content for equal-height.
                  </p>
                  <button class="btn btn-outline-secondary" type="button">
                    Example button
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end my-3">
              <button className="btn btn-custom-1 ">Save</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
