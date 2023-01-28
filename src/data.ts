export const QUARTERS = [
  "FALL 22",
  "WINTER 23",
  "SPRING 23",
  "FALL 23",
  "WINTER 24",
];
export const CURRENT_QUARTER = "WINTER 23";

export const SCHEDULES = [
  {
    QUARTER: "WINTER 23",
    CLASSES: [
      { id: "c59b66", grd: "GR" },
      { id: "f9d9d8", grd: "PN" },
      { id: "7f96f8", grd: "GR" },
      { id: "3dc2f8", grd: "GR" },
      { id: "59daa2", grd: "GR" },
      { id: "2db92e", grd: "GR" },
    ],
  },
];

export const DEPT: { [key: string]: string } = {
  ["a849a6"]: "COM LIT",
  ["152341"]: "GLBLCLT",
  ["a7f96a"]: "HISTORY",
  ["57e15a"]: "PHILOS",
};
export const CLASSES: CLASS[] = [
  {
    id: "c59b66",
    qrtr: "WINTER 23",
    dept: "a849a6",
    code: "60B",
    title: "READING WITH THEORY",
    type: "Lec",
    sec: "A",
    units: 4.0,
    days: [1, 3],
    time: { start: [14, 0], end: [15, 20] },
    location: "PCB 1300",
    instructor: ["AMIRAN, E."],
    cocourses: [],
  },
  {
    id: "f9d9d8",
    qrtr: "WINTER 23",
    dept: "152341",
    code: "103B",
    title: "BUDDHIST ART OF JPN",
    type: "Lec",
    sec: "A",
    units: 4.0,
    days: [2, 4],
    time: { start: [9, 30], end: [10, 50] },
    location: "HH 118",
    instructor: ["TINSLEY, E."],
  },
  {
    id: "7f96f8",
    qrtr: "WINTER 23",
    dept: "a7f96a",
    code: "21B",
    title: "WORLD:EMPIRE&REVOLT",
    type: "Lec",
    sec: "A",
    units: 4.0,
    days: [1, 3, 5],
    time: { start: [12, 0], end: [12, 50] },
    location: "PCB 1100",
    instructor: ["COLLER, I."],
    cocourses: ["3dc2f8"],
  },
  {
    id: "3dc2f8",
    qrtr: "WINTER 23",
    dept: "a7f96a",
    code: "21B",
    title: "WORLD:EMPIRE&REVOLT",
    type: "Dis",
    sec: "3",
    units: 0.0,
    days: [5],
    time: { start: [10, 0], end: [10, 50] },
    location: "SST 122",
    instructor: ["COLLER, I.", "PUENTES, P."],
  },
  {
    id: "59daa2",
    qrtr: "WINTER 23",
    dept: "57e15a",
    code: "13",
    title: "HIST CONTEM PHILOS",
    type: "Lec",
    sec: "A",
    units: 4.0,
    days: [2, 4],
    time: { start: [14, 0], end: [15, 20] },
    location: "PSCB 140",
    instructor: ["BONCOMPAGNI, A."],
    cocourses: ["2db92e"],
  },
  {
    id: "2db92e",
    qrtr: "WINTER 23",
    dept: "57e15a",
    code: "13",
    title: "HIST CONTEM PHILOS",
    type: "Dis",
    sec: "2",
    units: 0.0,
    days: [4],
    time: { start: [17, 0], end: [17, 50] },
    location: "HICF 100L",
    instructor: ["LEBRUN, A.", "BONCOMPAGNI, A."],
  },
];

interface CLASS {
  id: string;
  qrtr: string;
  dept: string;
  code: string;
  title: string;
  type: "Lec" | "Dis";
  sec: string;
  units: number;
  days: number[];
  time: { start: [number, number]; end: [number, number] } | null;
  location: string;
  instructor: string[];
  cocourses?: string[];
}

//          2x - 13
// 7     1  14 - 13 = 1
// 7 .5  2
// 8     3  16 - 13 = 3
// 8 .5  4
// 9     5  18 - 13 = 5
// 9 30  6
// 10    7
//       8
// 11    9
//       10
// 12    11 24 - 13 = 11
// 12 30 12
// 13    13 26 - 13 = 13
//       14
// 2     15
