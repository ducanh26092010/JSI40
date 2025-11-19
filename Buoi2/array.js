const root_arr = [1, 12.4, "abc", true, false, [1, 2, 3]];
// --------------------------------------------------------
// map: trả về một mảng mới với các phần tử được biến đổi
// doi map thanh string + "new_"
const new_arr = root_arr.map((item) => "new_" + item);
console.log("Map: " + new_arr);
// filter

// ------------------------------------------------------------
// reduce

// ---------------------------------------------------------

// join: trả về 1 string mới, chuyển mảng thành string với phân cách là kí tự truyền vào
// map -> xuống hàng cho từng phần tử
const joined_str = root_arr.join("\n");
console.log("Join:\n" + joined_str);
// -----------------------------------------------------------
// flat: tra ve mang ms, lam phang mang da chieu thanh 1D
const flat_arr = root_arr.flat();
console.log("Flat:\n" + flat_arr);
// ------------------------------------------------------
// find: tra ve phan tu dau tien khop vs dieu kien
// tim so 1
const found_item = flat_arr.find((item) => item == 1);
console.log("Find:" + found_item)
// -------------------------------------------------------
// some: tra ve boolean, co it nhat 1 phan tu khop dieu kien
const has_abc = flat_arr.some((item) => String(item).includes("a"));
console.log("Some: " + has_a);
//-------------------------------------------------------------
// every: tra ve boolean, thoa dieu kien tat ca phan tu phai khop
const all_number = flat_arr.every((item) => typeof item === "number");
console.log("Every: " + all_number);
// ---------------------------------------------------------
// slice: tra ve mang moi doi cat tu mang goc
// slice(start, end): cat tu index start cho den index end - 1
const slice_arr = flat_arr.slice(3, 6);
console.log("Slice: " + slice_arr);