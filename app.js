const str = prompt("Zəhmət olmasa bir mətn daxil edin:");

const length = str.length;
console.log("1. Mətnin uzunluğu:", length);

const hasE = str.includes("e");
console.log("2. 'e' hərfi var?:", hasE);

const startsWithCode = str.startsWith("code");
console.log("3. 'code' sözü ilə başlayır?:", startsWithCode);

const endsWithCode = str.endsWith("code");
console.log("4. 'code' sözü ilə bitir?:", endsWithCode);

const replacedStr = str.replaceAll("t", "####");
console.log("5. Dəyişdirilmiş mətn:", replacedStr);