(function(){

    for(let i = 1; i <= 24; i++){

let css =
`.day[data-day='${i}'] {
    grid-area:d${i};
}

.day[data-day='${i}'] .back {
    background-image:url(img/day${i}.svg);
}
`;

        console.log(css);

    }

})(); 