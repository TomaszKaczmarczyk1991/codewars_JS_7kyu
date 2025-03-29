function initializeNames(name){
    const namesArr = [...name.split(' ')];
    const result = [];
    
    if(namesArr.length === 1 || namesArr.length === 2) return name;


    for(let i = 0; i < namesArr.length; i++) {
        if(i === 0) {
            result.push(`${namesArr[i]} `);
            continue;
        }
        if(i === namesArr.length - 1) {
            result.push(namesArr[i]);
            break;
        }
        result.push(`${namesArr[i].slice(0, 1)}. `);
    }

    return result.join('');
  }

console.log(initializeNames('Jack Ryan Smith'));

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'