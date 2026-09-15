import { EndCredits } from './ui/EndCredits.js';

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-btn').style.display = 'none';
    EndCredits.rollSequence();
});