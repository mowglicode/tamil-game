$(document).ready(function () {
    const letters = [
        { tl: 'அ', fr: 'a' },
        { tl: 'ஆ', fr: 'aa' },
        { tl: 'இ', fr: 'i' },
        { tl: 'ஈ', fr: 'ii' },
        { tl: 'உ', fr: 'u' },
        { tl: 'ஊ', fr: 'uu' },
        { tl: 'எ', fr: 'e' },
        { tl: 'ஏ', fr: 'ee' },
        { tl: 'ஐ', fr: 'ai' },
        { tl: 'ஒ', fr: 'o' },
        { tl: 'ஓ', fr: 'oa' },
        { tl: 'ஔ', fr: 'au' },
        { tl: 'க்', fr: 'k' },
        { tl: 'ங்', fr: 'n' },
        { tl: 'ச்', fr: 'c' },
        { tl: 'ஞ்', fr: 'n' },
        { tl: 'ட்', fr: 't' }, 
        { tl: 'ண்', fr: 'n' },
        { tl: 'த்', fr: 't' },
        { tl: 'ந்', fr: 'n' },
        { tl: 'ப்', fr: 'p' },
        { tl: 'ம்', fr: 'm' },
        { tl: 'ய்', fr: 'y' },
        { tl: 'ர்', fr: 'r' },
        { tl: 'ல்', fr: 'l' },
        { tl: 'வ்', fr: 'v' },
        { tl: 'ழ்', fr: 'j' },
        { tl: 'ள்', fr: 'l' },
        { tl: 'ன்', fr: 'n' }
    ];

    let random = Math.floor(Math.random() * letters.length);

    function getletters(letters, random) {

        let letter = letters[random];
        let score = 0;
        let counter = 0;

        $('button').click(function (e) {
            let input = $('input').val();
            input = input.toLowerCase();
            e.preventDefault();
            if (input === letter.fr) {
                $('.message').removeClass('text-danger');
                $('.message').addClass('text-success');
                $('.message').text('Bonne réponse !');
                score += 1;
            } else {
                $('.message').removeClass('text-success');
                $('.message').addClass('text-danger');
                $('.message').text('Mauvaise réponse 😔 ' + letter.tl + ' : ' + letter.fr);
            }
            $('input').val('');
            counter += 1;
            random = Math.floor(Math.random() * letters.length);
            letter = letters[random];
            $('#wrapper #tl-letter').text(letter.tl);
            $('#wrapper #score').text(score + '/' + counter);
        });



    }
    $('#wrapper #tl-letter').text(letters[random].tl);
    getletters(letters, random);



});