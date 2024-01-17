import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
          <div className="col-span-2">
            <div className="flex gap-4">
              <p>01.</p>
              <div className="flex flex-col">
                <p>Home</p>
                <p>ポートフォ</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex gap-6">
              <p>02.</p>
              <div className="flex flex-col">
                <p>Gallery</p>
                <p>ポートフォリオ</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex gap-6">
              <p>02.</p>
              <div className="flex flex-col">
                <p>Gallery</p>
                <p>ポートフォ</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex gap-6">
              <p>02.</p>
              <div className="flex flex-col">
                <p>Gallery</p>
                <p>ポートフォ</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex gap-6">
              <p>02.</p>
              <div className="flex flex-col">
                <p>Gallery</p>
                <p>ポートフォ</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex gap-6">
              <p>02.</p>
              <div className="flex flex-col">
                <p>Gallery</p>
                <p>ポートフォ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
