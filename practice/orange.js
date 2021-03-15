let friendship;

if (true) {
    // if ブロックを抜けると参照されなくなり、he は GC によりメモリから解放される
    const he = 'kakeru';
    const saveHim = () => {
        console.log(`${he} saved`);
    };

    // 外からの参照を残す
    friendship = saveHim;
}

friendship(); // kakeru saved
