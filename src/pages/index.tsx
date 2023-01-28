/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/unbound-method */
import { type NextPage } from "next";
import { useRef, useState } from "react";
import { CLASSES, CURRENT_QUARTER, DEPT, QUARTERS, SCHEDULES } from "../data";
import Image from "next/image"
import { Formik } from "formik"

const Home: NextPage = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(
    QUARTERS.findIndex((e) => e === CURRENT_QUARTER)
  );
  const [schedules, setSchedules] = useState(
    QUARTERS.map((e) => ({
      QUARTER: e,
      CLASSES: SCHEDULES.find((e_1) => e_1.QUARTER === e)?.CLASSES.map(
        (e_1) => ({ ...CLASSES.find((e_2) => e_1.id === e_2.id), ...e_1 })
      ),
    }))
  );
  const dom = useRef<HTMLElement>(null);
  const [searchToggle, setSearchToggle] = useState(false);

  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-clip bg-[url('../../public/bg.jpg')] bg-cover bg-left">
        <div
          className="absolute z-0 h-full w-full opacity-50"
          style={{
            animation: "hue 70s linear infinite, opacity 50s linear infinite",
          }}
        >
          <Image
            src="/../public/bg.jpg"
            alt="bg"
            fill
            className="object-cover object-left"
          />
        </div>
        <main
          className="relative flex h-screen flex-row flex-nowrap justify-evenly"
          ref={dom}
        >
          <div className="flex w-[25%] flex-col flex-nowrap items-start">
            <div className="rounded-lg pl-8 pb-10 text-gray-800">
              <div className="rounded-lg px-1.5 pt-10 text-[2.25rem] font-semibold">
                Hi <span className="underline">Greg,</span>
              </div>
              <div className="rounded-lg px-1.5 pt-2 text-[2.25rem] font-semibold">
                this is your
              </div>
              <div className="rounded-lg px-1.5 pt-2 text-[3rem] font-black">
                WebReg!
              </div>
            </div>

            {/* Degree Roadmap */}
            <div
              className="mt-6 mb-24 flex w-[90%] flex-col items-center rounded-xl"
              // border-l border-gray-100
            >
              {/* Title */}
              <div
                className="relative z-[10] flex w-52 items-center justify-evenly rounded-t-xl bg-white px-4 pt-3 text-gray-700 shadow-tab"
                // border-t border-r border-gray-100
              >
                <div className="relative z-[10] h-5 w-36 touch-none select-none text-sm font-bold drop-shadow-[0_1px_1px_#00001212]">
                  Degree Roadmap
                </div>
                <div
                  className={`relative z-[20] mr-1 ${
                    selectedQuarter === QUARTERS.length - 1
                      ? "text-gray-200"
                      : "text-gray-500 transition hover:scale-[90%]"
                  }`}
                >
                  <div
                    style={{
                      transform: `rotate(${searchToggle ? 180 : 0}deg)`,
                    }}
                  >
                    &#9660;
                  </div>
                  <div
                    className="absolute top-[0%] left-[-45%] z-30 h-6 w-6 cursor-pointer rounded border-2 border-gray-100 shadow-button"
                    onClick={() => {
                      setSearchToggle((prev) => !prev);
                    }}
                  />
                </div>
                <div className="absolute top-[30%] left-[0%] z-0 h-full w-full rounded-xl bg-white" />
              </div>

              {/* Roadmap */}
              {searchToggle && (
                <div
                  className="z-[0] h-[90vh] w-full"
                  // border-y border-r border-gray-100
                ></div>
              )}
            </div>
          </div>

          {/* Schedule */}
          <div className="flex w-[45%] flex-col flex-nowrap items-center overflow-auto">
            <div
              className="mt-6 mb-24 flex w-[94%] flex-col rounded-xl"
              // border-l border-gray-100
            >
              {/* Quarter Selection */}
              <div
                className="relative z-50 flex w-48 items-center justify-center rounded-t-xl bg-white px-4 pt-3 pb-3 text-gray-800 shadow-tab"
                // border-t border-r border-gray-100
              >
                {/* tab css */}
                {/* <div className="absolute left-[11.99rem] top-[2.26rem] z-10 h-3 w-4 rounded-bl-[0.6rem] shadow-corner" /> */}
                {/* <div className="absolute left-[10rem] top-6 z-0 h-6 w-5 rounded-tr-full bg-gradient-to-tr from-white" /> */}

                <div
                  className={`relative pl-1 ${
                    selectedQuarter === 0
                      ? "text-gray-200"
                      : "text-gray-500 transition hover:scale-[90%]"
                  }`}
                >
                  &#9664;
                  <div
                    className={`absolute top-[2%] left-[-10%] z-30 h-6 w-6 rounded border-2 border-gray-100 shadow-button ${
                      selectedQuarter === 0
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                    onClick={() => {
                      setSelectedQuarter((prev) => {
                        const selection = prev > 0 ? prev - 1 : 0;
                        if (dom.current)
                          dom.current
                            .querySelectorAll<HTMLElement>(".CLASS")
                            .forEach((e) => {
                              e.style.opacity = "0";
                              e.style.transform = "scale(0.75)";
                            });
                        setTimeout(
                          () =>
                            schedules
                              .find((e) => e.QUARTER === QUARTERS[selection])
                              ?.CLASSES?.forEach((e) => {
                                if (!dom.current) return;
                                const el =
                                  dom.current.querySelectorAll<HTMLElement>(
                                    `.CLASS-${e?.id}`
                                  );
                                if (!el) return;
                                el.forEach((e) => {
                                  e.style.transform = "scale(96%)";
                                  e.style.opacity = "1";
                                });
                              }),
                          250
                        );
                        return selection;
                      });
                    }}
                  />
                </div>
                <div
                  className="relative h-5 w-36 touch-none select-none text-center text-sm"
                  style={{ clipPath: "inset(0px)" }}
                >
                  {QUARTERS.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="absolute inset-0 mt-[1px] font-bold drop-shadow-[0_1px_1px_#00001212] transition duration-[400ms]"
                        style={{
                          transform: `translateX(${
                            8 * (i - selectedQuarter)
                          }rem)`,
                        }}
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
                <div
                  className={`relative mr-1 ${
                    selectedQuarter === QUARTERS.length - 1
                      ? "text-gray-200"
                      : "text-gray-500 transition hover:scale-[90%]"
                  }`}
                >
                  &#9654;
                  <div
                    className={`absolute top-[3%] left-[-45%] z-30 h-6 w-6 rounded border-2 border-gray-100 shadow-button ${
                      selectedQuarter === QUARTERS.length - 1
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                    onClick={() => {
                      setSelectedQuarter((prev) => {
                        const selection =
                          prev < QUARTERS.length - 1
                            ? prev + 1
                            : QUARTERS.length - 1;
                        if (dom.current)
                          dom.current
                            .querySelectorAll<HTMLElement>(".CLASS")
                            .forEach((e) => {
                              e.style.opacity = "0";
                              e.style.transform = "scale(0.75)";
                            });
                        setTimeout(
                          () =>
                            schedules
                              .find((e) => e.QUARTER === QUARTERS[selection])
                              ?.CLASSES?.forEach((e) => {
                                if (!dom.current) return;
                                const el =
                                  dom.current.querySelectorAll<HTMLElement>(
                                    `.CLASS-${e?.id}`
                                  );
                                if (!el) return;
                                el.forEach((e) => {
                                  e.style.transform = "scale(96%)";
                                  e.style.opacity = "1";
                                });
                              }),
                          250
                        );
                        return selection;
                      });
                    }}
                  />
                </div>
                {/* current quarter indicator */}
                <div
                  className="absolute	top-[-0.5rem] z-30 h-4 origin-bottom rounded-xl border border-orange-500 bg-white px-1.5 text-xs leading-3 text-orange-500 drop-shadow-[0_1px_2px_#fc984cb0] transition"
                  style={{
                    transform:
                      QUARTERS[selectedQuarter] === CURRENT_QUARTER
                        ? "scale(1)"
                        : "scale(0.3)",
                    opacity:
                      QUARTERS[selectedQuarter] === CURRENT_QUARTER ? "1" : "0",
                  }}
                >
                  current
                  <div
                    className="absolute top-[0.88rem] left-[1.17rem] h-[0.45rem] w-[0.9rem] bg-orange-500"
                    style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                  />
                  <div
                    className="absolute top-[0.85rem] left-5 h-1.5 w-3 bg-white"
                    style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                  />
                </div>
              </div>

              {/* Time Table */}
              <div
                className="z-[60] rounded-b-xl rounded-tr-xl bg-white shadow-timetable"
                // border-y border-r border-gray-100
              >
                {/* <div
                  className="absolute left-[23.75rem] top-[4rem] h-9 w-[12.55rem] bg-black"
                  style={{
                    clipPath:
                      "polygon(0 0, 95% 0, 96% 12%, 98% 20%, 105% 29%, 100% 70%, 90% 70%, 0 70%)",
                  }}
                /> */}

                <div
                  className="w-full overflow-clip rounded-b-xl rounded-tr-xl pb-6"
                  style={{ clipPath: "inset(16px)" }}
                >
                  <div
                    className={`grid grid-rows-1 rounded-b-xl rounded-tr-xl transition duration-[400ms] ease-in-out grid-cols-${QUARTERS.length}`}
                    style={{
                      width: `${QUARTERS.length * 100}%`,
                      transform: `translateX(-${selectedQuarter * 20}%)`,
                    }}
                  >
                    {QUARTERS.map((_, i) => (
                      <div
                        className="grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] place-items-center px-6 pt-3"
                        key={i}
                      >
                        {/* Labels */}
                        <div className="col-start-2 col-end-3 grid h-min w-full grid-cols-5 place-items-center pb-1.5">
                          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((e, i) => (
                            <div key={i} className="text-xs text-gray-500">
                              {e}
                            </div>
                          ))}
                        </div>
                        <div className="col-start-1 col-end-2 grid w-10 grid-rows-30 pr-2">
                          {Array(15)
                            .fill(null)
                            .map((_, i) => (
                              <>
                                <div
                                  key={i}
                                  className={`col-start-1 col-end-2 flex h-6 text-2xs text-gray-500 row-start-${
                                    (i + 1) * 2
                                  } row-end-${(i + 1) * 2 + 2}`}
                                >
                                  <div className="my-auto ml-auto">
                                    {i + 7 === 12
                                      ? "12 PM"
                                      : i + 7 < 12
                                      ? `${i + 7} AM`
                                      : `${i - 5} PM`}
                                  </div>
                                </div>
                                <div
                                  key={i}
                                  className={`relative col-start-1 col-end-2 h-7 row-start-${
                                    (i + 1) * 2 + 1
                                  } row-end-${(i + 1) * 2 + 3}`}
                                />
                              </>
                            ))}
                        </div>

                        {/* Classes */}
                        {
                          <div className="grid h-full w-full grid-cols-5">
                            {Array(5)
                              .fill(null)
                              .map((_, col) => {
                                const day = col + 1;
                                return (
                                  <div
                                    key={day}
                                    className="grid h-full w-full grid-cols-1 grid-rows-30"
                                  >
                                    {Array(30)
                                      .fill(null)
                                      .map((_, row) => {
                                        const time = row / 2 + 7;
                                        const CLASS = schedules
                                          .find(
                                            (e) => e.QUARTER === QUARTERS[i]
                                          )
                                          ?.CLASSES?.find(
                                            (e) =>
                                              e?.time &&
                                              e.days?.includes(day) &&
                                              e.time.start[0] ===
                                                Math.floor(time) &&
                                              (time % 1 > 0
                                                ? e.time.start[1] >= 30
                                                : e.time.start[1] < 30)
                                          );
                                        return (
                                          <div
                                            key={time * 10}
                                            className={`relative h-7 w-full border-dotted border-gray-300 text-2xs ${
                                              col > 0 && "border-l"
                                            } ${row > 0 && "border-t"}`}
                                          >
                                            {CLASS && CLASS.time && (
                                              <div
                                                className={`CLASS CLASS-${CLASS.id} absolute z-[70] mt-[1px] w-full scale-[96%] overflow-auto whitespace-nowrap rounded text-black backdrop-blur transition`}
                                                style={{
                                                  backgroundColor: `#${CLASS.id}A0`,
                                                  boxShadow: `0 3px 8px -1px #${CLASS.id}80, 0 2px 6px -2px #${CLASS.id}80`,
                                                  // border: `1px solid #${CLASS.id}30`,
                                                  // border: `1px solid #484848`,
                                                  height: `${
                                                    (3.5 *
                                                      (CLASS.time.end[0] * 60 +
                                                        CLASS.time.end[1] -
                                                        (CLASS.time.start[0] *
                                                          60 +
                                                          CLASS.time
                                                            .start[1]))) /
                                                    60
                                                  }rem`,
                                                  marginTop: `${
                                                    CLASS.time.start[1] === 0 ||
                                                    CLASS.time.start[1] === 30
                                                      ? 0
                                                      : time % 1 > 0
                                                      ? (1.75 *
                                                          (CLASS.time.start[1] -
                                                            30)) /
                                                        30
                                                      : (1.75 *
                                                          CLASS.time.start[1]) /
                                                        30
                                                  }rem`,
                                                }}
                                              >
                                                <div className="h-max w-fit px-1.5 py-1">
                                                  <div className="opactiy-80 text-[90%]">
                                                    {`${(
                                                      CLASS.time.start[0] -
                                                      (CLASS.time.start[0] <= 12
                                                        ? 0
                                                        : 12)
                                                    ).toLocaleString("en-US", {
                                                      minimumIntegerDigits: 2,
                                                      useGrouping: false,
                                                    })}:${CLASS.time.start[1].toLocaleString(
                                                      "en-US",
                                                      {
                                                        minimumIntegerDigits: 2,
                                                        useGrouping: false,
                                                      }
                                                    )}${
                                                      CLASS.time.start[0] <= 12
                                                        ? "AM"
                                                        : "PM"
                                                    } - ${(
                                                      CLASS.time.end[0] -
                                                      (CLASS.time.end[0] <= 12
                                                        ? 0
                                                        : 12)
                                                    ).toLocaleString("en-US", {
                                                      minimumIntegerDigits: 2,
                                                      useGrouping: false,
                                                    })}:${CLASS.time.end[1].toLocaleString(
                                                      "en-US",
                                                      {
                                                        minimumIntegerDigits: 2,
                                                        useGrouping: false,
                                                      }
                                                    )}${
                                                      CLASS.time.end[0] <= 12
                                                        ? "AM"
                                                        : "PM"
                                                    }`}
                                                  </div>
                                                  <div className="">
                                                    {`${DEPT[CLASS.dept!]} ${
                                                      CLASS.code
                                                    } ${CLASS.type}`}
                                                  </div>
                                                  <div className="opactiy-80 text-[90%]">{`${CLASS.location}`}</div>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                  </div>
                                );
                              })}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search for Classes */}
          <div className="flex w-[30%] flex-col flex-nowrap items-start overflow-visible">
            <div
              className="mt-6 mb-24 flex w-[96%] flex-col rounded-xl"
              // border-l border-gray-100
            >
              {/* Title */}
              <div
                className="relative z-[10] flex w-52 items-center justify-evenly rounded-t-xl bg-white px-4 pt-3 text-gray-700 shadow-tab"
                // border-t border-r border-gray-100
              >
                <div className="relative z-[10] h-5 w-36 touch-none select-none text-sm font-bold drop-shadow-[0_1px_1px_#00001212]">
                  Search for Classes
                </div>
                <div
                  className={`relative z-[20] mr-1 ${
                    selectedQuarter === QUARTERS.length - 1
                      ? "text-gray-200"
                      : "text-gray-500 transition hover:scale-[90%]"
                  }`}
                >
                  <div
                    className="transition"
                    style={{
                      transform: `rotate(${searchToggle ? 180 : 0}deg)`,
                    }}
                  >
                    &#9660;
                  </div>
                  <div
                    className="absolute top-[0%] left-[-45%] z-30 h-6 w-6 cursor-pointer rounded border-2 border-gray-100 shadow-button"
                    onClick={() => {
                      setSearchToggle((prev) => !prev);
                    }}
                  />
                </div>
                <div className="absolute top-[30%] left-[0%] z-0 h-full w-full rounded-xl bg-white" />
              </div>

              {/* Search */}
              {searchToggle && (
                <div
                  className="z-[0] flex h-[90vh] w-full flex-col items-center"
                  // border-y border-r border-gray-100
                >
                  <div>
                    <Formik
                      initialValues={{ input: "" }}
                      onSubmit={(values, { setSubmitting }) => {}}
                    >
                      {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }) => (
                        <form
                          onSubmit={handleSubmit}
                          className="mt-8 h-8 w-[90%] flex flex-row"
                        >
                          <input
                            className="w-full rounded-2xl border-[1.5px] border-gray-400 bg-transparent "
                            name="input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.input}
                          />
                          <button type="submit" disabled={isSubmitting} className="pl-3 text-gray-500 text-lg">
                            search
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
