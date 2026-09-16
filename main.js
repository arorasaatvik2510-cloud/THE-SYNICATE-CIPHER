import { EndCredits } from './ui/EndCredits.js';

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-btn').style.display = 'none';
    EndCredits.rollSequence();
});
<button id="start-btn">Initiate Final Sequence</button>;
document.getElementById('start-btn').addEventListener('click', () => {
    // Code happens here
});
document.getElementById('start-btn').style.display = 'none';
EndCredits.rollSequence();
setTimeout(() => {
    UIManager.logEvent("All syndicate nodes disabled.");
}, 2000);
document.getElementById('start-btn').addEventListener('click', () => {
    // Code happens here
});
document.getElementById('start-btn').style.display = 'none';
EndCredits.rollSequence();
