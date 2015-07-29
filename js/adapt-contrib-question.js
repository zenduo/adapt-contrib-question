define(function(require) {

    var QuestionView = require('coreViews/questionView');
    var Adapt = require('coreJS/adapt');
    
    var Question = QuestionView.extend({

        events: {},

        // Used by question to disable the question during submit and complete stages
        disableQuestion: function() {},

        // Used by question to enable the question during interactions
        enableQuestion: function() {},

        // Used by the question to reset the question when revisiting the component
        resetQuestionOnRevisit: function() {},

        // Left blank for question setup - should be used instead of preRender
        setupQuestion: function() {},

        // Blank method used just like postRender is for presentational components
        onQuestionRendered: function() {},

        // Use to check if the user is allowed to submit the question
        // Maybe the user has to select an item?
        // Should return a boolean
        canSubmit: function() {},

        // Blank method for question to fill out when the question cannot be submitted
        onCannotSubmit: function() {},

        // This is important for returning or showing the users answer
        // This should preserve the state of the users answers
        storeUserAnswer: function() {},

        // Should return a boolean based upon whether to question is correct or not
        isCorrect: function() {},

        // Used to set the score based upon the _questionWeight
        setScore: function() {},

        // This is important and should give the user feedback on how they answered the question
        // Normally done through ticks and crosses by adding classes
        showMarking: function() {},

        // Used by the question to determine if the question is incorrect or partly correct
        // Should return a boolean
        isPartlyCorrect: function() {},

        // Used by the question view to reset the stored user answer
        resetUserAnswer: function() {},

        // Used by the question view to reset the look and feel of the component.
        // This could also include resetting item data
        resetQuestion: function() {},

        // Used by the question to display the correct answer to the user
        showCorrectAnswer: function() {},

        // Used by the question to display the users answer and
        // hide the correct answer
        // Should use the values stored in storeUserAnswer
        hideCorrectAnswer: function() {}

    });
    
    Adapt.register("question", Question);

    return Question;
    
});