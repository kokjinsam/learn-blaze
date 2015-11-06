Template.hello.helpers({
	
});

Template.hello.events({
	'click #clickRemove': function(event, tmpl) {
		console.log('clicked remove btn');
		console.log(tmpl);
		
		/**
		 * This block won't work because p#title is not in hello template
		 */
		console.log(tmpl.find('p#title'));
		console.log(tmpl.$('p#title'));
		
		/**
		 * This block works because p#mainTitle is in hello template
		 */
		console.log(tmpl.find('p#mainTitle'));
		console.log(tmpl.$('p#mainTitle'));
		
		/**
		 * use global search for p#title instead
		 */
		console.log($('p#title')[0]);
		var scene = Blaze.getView($('p#title')[0]);
		console.log(scene);
		
		//remove template
		console.log('removing DOM');
		Blaze.remove(scene);
	},
	
	'click #clickRemoveView': function(event, tmpl) {
		console.log('clicked remove view btn');
		console.log($('p#mywords'));
		var scene = Blaze.getView($('p#mywords')[0]);
		console.log(scene);
		
		//remove view
		console.log('removing view');
		Blaze.remove(scene);
	},
	
	'click #clickRemoveUlView': function(event, tmpl) {
		console.log('clicked remove ul view btn');
		console.log(tmpl);
		console.log(tmpl.$('p#mainTitle'));
		console.log(tmpl.$('ul#mylist'));
		var scene = Blaze.getView(tmpl.$('ul#mylist')[0]);
		console.log(scene);
		
		//remove view
		console.log('removing view');
		Blaze.remove(scene);
	},
	
	'click #clickAdd': function(event, tmpl) {
		console.log('clicked add btn');
		
		//add template
		console.log('adding DOM');
		Blaze.render(Template.hey, document.body);
	},
	
	'click #clickAddView': function(event, tmpl) {
		console.log('clicked add view btn');
		
		/**
		 * This is for manipulating data context(?) in template
		 */
		
		//add view
		//for more info: see http://stackoverflow.com/questions/28447373/what-is-the-relationship-between-a-blaze-view-and-template
		console.log('adding view');
		var view = HTML.P({id:'mywords'},Blaze.View(function(){
			return 'From Blaze View'; 
		}));
		
		Blaze.render(view, document.body);
	},
	
	'click #clickAddUlView': function(event, tmpl) {
		console.log('clicked add ul view btn');

		/**
		 * Add an ul to body
		 */
		var UL = HTML.UL, LI = HTML.LI, B = HTML.B;
		
		var list = UL({id: 'mylist'},
				LI({'class': 'item'}, "Hello ", B("world"), "!"),
				LI({'class': 'item'}, "Goodbye, world")
			);
		
		//add view
		var ulView = Blaze.View(function() {
			return list;
		});

		Blaze.render(ulView, document.body);
	}
});

Template.hello.onCreated(function(){
	
});

Template.hello.onRendered(function(){
	
});
