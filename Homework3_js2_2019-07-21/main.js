
//задаем строку и меняем ковычки
		
	const str = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`;
    console.log(str.replace (/([^\w]+)'|'(\n)/g, '$1"$2'));
		


//Если брать строку со страницы, то он выдает, что это срока, 
//но при replace не стработает, а выдаст ошибку:[object Undefined]
//не могу понять почему(((
/*
const str = toString(document.getElementById('text'));

 console.log(typeof str);
    console.log(str.replace(/([^\w]+)'|'(\n)/g, '$1"$2'));
   */