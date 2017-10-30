
window.onload = function() {

    // Container
    const campaignsContainer = document.getElementById('campaigns');

    // All Items
    const items = document.querySelectorAll('.item');

    // Showing Item Counter
    const showingItemCount = Math.floor(campaignsContainer.clientWidth/(220+10));
    const hideElementCount = items.length - showingItemCount;
    
    // Showing Item Add Active Class
    for (i = 0; i < showingItemCount; ++i) {
        items[i].classList.add('active');
    }
    
    // Next
    document.getElementById('dur').onclick = function() {
        let _lastActiveIndex = getLastIndex(document.querySelectorAll('.item'));
        if (1 == 1) {
            //for (i = 0; i < hideElementCount; i++) items[i].classList.remove('active');
            //for (i = _lastActiveIndex; i <= _lastActiveIndex+2; i++) items[i].classList.add('active');
            console.log(_lastActiveIndex)
        }
    }

};

// get index methodu yazilmasi gerekiyor.
// indexten sonraki 2 tane acilacak, onceki 2 tane kapanacak.