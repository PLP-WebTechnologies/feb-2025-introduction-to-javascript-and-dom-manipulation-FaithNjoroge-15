// 1. Changing Nutritional Tip Dynamically
document.getElementById('changeNutritionTip').addEventListener('click', function() {
    const nutritionTipElement = document.getElementById('nutritionTip');
    const nutritionTips = [
      "Start your day with a healthy breakfast: oatmeal and fresh fruit.",
      "Drink at least 8 glasses of water a day to stay hydrated.",
      "Include nuts and seeds in your diet for a healthy fat intake."
    ];
    const randomTip = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
    nutritionTipElement.textContent = randomTip;
  });
  
  // 2. Changing Exercise Tip Dynamically
  document.getElementById('changeExerciseTip').addEventListener('click', function() {
    const exerciseTipElement = document.getElementById('exerciseTip');
    const exerciseTips = [
      "Start with stretching before any physical activity.",
      "Try a 15-minute yoga session to improve flexibility.",
      "Join a local fitness class to stay motivated."
    ];
    const randomExercise = exerciseTips[Math.floor(Math.random() * exerciseTips.length)];
    exerciseTipElement.textContent = randomExercise;
  });
  
  // 3. Adding Wellness Motivation Dynamically
  document.getElementById('motivationButton').addEventListener('click', function() {
    const motivationSection = document.createElement('section');
    motivationSection.style.marginTop = '20px';
    motivationSection.style.backgroundColor = '#e8f5e9';
    motivationSection.style.padding = '15px';
    motivationSection.style.borderRadius = '8px';
    motivationSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  
    const motivationText = document.createElement('p');
    motivationText.textContent = "Believe in yourself and your health journey. Every step counts!";
    motivationSection.appendChild(motivationText);
  
    const closeButton = document.createElement('button');
    closeButton.textContent = "Close Motivation";
    closeButton.style.backgroundColor = '#d32f2f';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', function() {
      motivationSection.remove(); // Removing the wellness motivation section when clicked
    });
  
    motivationSection.appendChild(closeButton);
    document.body.appendChild(motivationSection);
  });
  