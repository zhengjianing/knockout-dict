$(document).ready(function(e){

    var ViewModel = function() {
        this.items = ko.observableArray([{'english':"hello", 'chinese':'你好'}]);
        this.englishToAdd = ko.observable('');
        this.chineseToAdd = ko.observable('');

        this.addItem = function(){
            var newItem = {'english':this.englishToAdd(), 'chinese':this.chineseToAdd()}
            this.items.unshift(newItem);
            this.englishToAdd('');
            this.chineseToAdd('');
        }

    };

    ko.applyBindings(new ViewModel());
});