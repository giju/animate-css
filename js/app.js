
var AnimList = [{
    label: "Attention Seekers",
    list: [{
        value: "bounce"
    },
    {
        value: "flash"
    },
    {
        value: "pulse"
    },
    {
        value: "rubberBand"
    },
    {
        value: "shake"
    },
    {
        value: "swing"
    },
    {
        value: "tada"
    },
    {
        value: "wobble"
    },
    {
        value: "jello"
    },
    {
        value: "heartBeat"
    }]
}, {
    label: "Bouncing Entrances",
    list: [{
        value: "bounceIn"
    },
    {
        value: "bounceInDown"
    },
    {
        value: "bounceInLeft"
    },
    {
        value: "bounceInRight"
    },
    {
        value: "bounceInUp"
    }]
}, {
    label: "Bouncing Exits",
    list: [{
        value: "bounceOut"
    },
    {
        value: "bounceOutDown"
    },
    {
        value: "bounceOutLeft"
    },
    {
        value: "bounceOutRight"
    },
    {
        value: "bounceOutUp"
    },
    ]
}, {
    label: "Fading Entrances",
    list: [
        {
            value: "fadeIn"
        },
        {
            value: "fadeInDown"
        },
        {
            value: "fadeInDownBig"
        },
        {
            value: "fadeInLeft"
        },
        {
            value: "fadeInLeftBig"
        },
        {
            value: "fadeInRight"
        },
        {
            value: "fadeInRightBig"
        },
        {
            value: "fadeInUp"
        },
        {
            value: "fadeInUpBig"
        }]
}, {
    label: "Fading Exits",
    list: [
        {
            value: "fadeOut"
        },
        {
            value: "fadeOutDown"
        },
        {
            value: "fadeOutDownBig"
        },
        {
            value: "fadeOutLeft"
        },
        {
            value: "fadeOutLeftBig"
        },
        {
            value: "fadeOutRight"
        },
        {
            value: "fadeOutRightBig"
        },
        {
            value: "fadeOutUp"
        },
        {
            value: "fadeOutUpBig"
        }]
}, {
    label: "Flippers",
    list: [
        {
            value: "flip"
        },
        {
            value: "flipInX"
        },
        {
            value: "flipInY"
        },
        {
            value: "flipOutX"
        },
        {
            value: "flipOutY"
        },
    ]
},
{
    label: "Lightspeed",
    list: [{
        value: "lightSpeedIn"
    },
    {
        value: "lightSpeedOut"
    }]
}, {
    label: "Rotating Entrances",
    list: [
        {
            value: "rotateIn"
        },
        {
            value: "rotateInDownLeft"
        },
        {
            value: "rotateInDownRight"
        },
        {
            value: "rotateInUpLeft"
        },
        {
            value: "rotateInUpRight"
        }
    ]
}, {
    label: "Rotating Exits",
    list: [
        {
            value: "rotateOut"
        },
        {
            value: "rotateOutDownLeft"
        },
        {
            value: "rotateOutDownRight"
        },
        {
            value: "rotateOutUpLeft"
        },
        {
            value: "rotateOutUpRight"
        }
    ]
}, {
    label: "Sliding Entrances",
    list: [
        {
            value: "slideInUp"
        },
        {
            value: "slideInDown"
        },
        {
            value: "slideInLeft"
        },
        {
            value: "slideInRight"
        }
    ]
},
{
    label: "Sliding Exits",
    list: [
        {
            value: "slideOutUp"
        },
        {
            value: "slideOutDown"
        },
        {
            value: "slideOutLeft"
        },
        {
            value: "slideOutRight"
        }
    ]
}, {
    label: "Zoom Entrances",
    list: [
        {
            value: "zoomIn"
        },
        {
            value: "zoomInDown"
        },
        {
            value: "zoomInLeft"
        },
        {
            value: "zoomInRight"
        },
        {
            value: "zoomInUp"
        }
    ]
},
{
    label: "Zoom Exits",
    list: [{
        value: "zoomOut"
    },
    {
        value: "zoomOutDown"
    },
    {
        value: "zoomOutLeft"
    },
    {
        value: "zoomOutRight"
    },
    {
        value: "zoomOutUp"
    }
    ]
}, {
    label: "Specials",
    list: [
        {
            value: "hinge"
        },
        {
            value: "jackInTheBox"
        },
        {
            value: "rollIn"
        },
        {
            value: "rollOut"
        }
    ]
}];
 
var app = new Vue({
    el: '#app',
    data: {
        animName :'',
        animOnHover :true,
        animList:[]
    },
    methods: {
        setFilter: function() {
            var animName = document.location.hash.replace("#",'');
            if (animName == '') {
                this.animName = ''; 
                this.animList = AnimList;
                return;
            }
            var  anim = AnimList.find(function(item) { 
                return item.list.find(function(anim){ 
                    return anim.value == animName;
                }) != null;
            });
            this.animName = animName;
            console.log('anims', anim, animName);
            this.animList = [
                {
                    label:anim.label,
                    list: anim.list.filter(function(name) { 
                        return name.value == animName
                    })
                }
            ];
        },
        addClass:function(evt) { 
            if (!this.animOnHover){
                return;
            }
            const elem = evt.target;
            elem.classList.add('animated', elem.getAttribute('data-anim'));
        },
        removeClass:function(evt){
            const elem = evt.target;
            elem.classList.remove('animated', elem.getAttribute('data-anim'));
        },
        toggleMode : function(){
            this.animOnHover = !this.animOnHover;
        }
    }
});
app.setFilter();
window.addEventListener('hashchange', function() { 
    app.setFilter();
}, true);