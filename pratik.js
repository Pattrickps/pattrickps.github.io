$(function() {
        var index = 0,
            count = 0;
        var word = '';
        var words = ["a programmer", "a developer", "a challenge-seeker", "a space enthusiast", "a hobby chef", "looking for work!"];
        untype();

        function type(word) {
            setTimeout(function() {
                if (word.length > 0) {
                    $('.typer').append(word.shift());
                    type(word);
                } else if (word.length === 0) {
                    pause();
                }
            }, 180)
        }

        function untype() {
            setTimeout(function() {
                word = $('.typer').html().split('');
                word.pop();
                if (word.length > 0) {
                    $('.typer').empty().append(word);
                    untype();
                } else if (word.length === 0) {
                    $('.typer').empty();
                    nextWord();
                }
            }, 100);
        }

        function pause() {
            setTimeout(function() {
                untype();
            }, 300);
        }

        function nextWord() {
            index = count % 6;
            count++;
            word = words[index].split('');
            type(word);
        }
    });
