function contains(obj, targetValue) {
  return Object.values(obj).some((value) => {
    if (typeof value === "object") {
      return contains(value, targetValue);
    } else {
      return value === targetValue;
    }
  });
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log("magicNumber: ", contains(nestedObject, 44));
console.log("magicNumber: ", contains(nestedObject, 55));
console.log("something: ", contains(nestedObject, "foo2"));
console.log("moreStuff: ", contains(nestedObject, "foo2"));
console.log("moreStuff: ", contains(nestedObject, "nth"));
