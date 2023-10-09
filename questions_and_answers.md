
<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B :  `ReferenceError: greetign is not defined`

<i>Because In above function there is declared greeting variable. But empty object was set as greetign. As spelling mistake of greeting it shown greetign is not define.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: `"12"`

<i>In above function sum() is calling two arguments one is integer and other is a string. We know that if we add integer and string it will concatenate.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>In Above funcion there was an array and an Objct. Object was create from arrays value. and next line Objects value was changed. So there only change Object value. Arrays value is not changed .because that object was copy arrays value.and refer another memory location. Thats why after changing object value, Arrays value is not changed.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In Above function there is a functon called sayHi(). and it will recieved one parameter. But when calling sayHi function no argument was passed. And in sayHi() function name parameter was used. As name parameter was not pass it will show undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:   C: 3

<i>In above function count variable is initialize as 0 and nums array have value [0,1,2,3] .And In nums.forEach() function we get every single num from nums array. and In forEach function there is a if contition which is check num is true or false. if true count value increase by 1 . But in nums array first value is 0 . and we know that 0 is falsy value.Thats why if statement is not execute first time. so, if statement execute 3 time for true and count value is increased by 1.And output is 3.</i>

</p>
</details>
