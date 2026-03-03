## 1️ JSX
- JSX = JavaScript + HTML মতো syntax
- UI structure সহজে লিখতে এবং React DOM update করতে ব্যবহৃত হয়

## 2️ State এবং Props
| Feature | State | Props |
|---------|-------|-------|
| মান | Mutable (পরিবর্তনযোগ্য) | Immutable (পরিবর্তন অযোগ্য) |
| কোথা থেকে আসে | Component ভিতর | Parent থেকে Child এ passed |
| ব্যবহার | Dynamic data | Parent থেকে data পাঠাতে |

## 3️ useState Hook
- Functional component-এ state ব্যবহার করার জন্য hook use করা হয় 
 useState Syntax:[
const [state, setState] = useState(initialValue);
]
setState দিয়ে value update করলে component auto re-render হয়

## State Share করার উপায়
Lift state up → common parent-এ রাখা, props দিয়ে পাঠানো
Context API → global-like state, prop drilling এড়াত
## Event Handling React 
Event নাম camelCase: onClick, onChange
Function pass করতে হবে, string নয়
Prevent default: e.preventDefault()
