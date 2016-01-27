var reg = {};

export default function(that,resume, url,x,y){
  reg.modal = new gameModal(resume);
  createModals(url);
  var m = that.add.button(x, y, "share", showModal);
  function showModal() {reg.modal.showModal("modal");}
}

function createModals(url) {


  reg.modal.createModal({
            type:"modal",
            includeBackground: true,
            modalCloseOnInput: true,
  itemsArr: [
                {
                    type: "image",
                    content: "modalBG",
                    offsetY: -20,
                    contentScale: 1,
                    callback: function(){reg.modal.hideModal("modal");}
                },  {
                  type: "image",
                  content: "facebook",
                  offsetY: -100,
                  offsetX: -130,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=" + url);
                    }
                },  {
                  type: "image",
                  content: "twitter",
                  offsetY: -100,
                  offsetX: 0,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=http://www.jndesigns.io/resume");
                    }
                },  {
                  type: "image",
                  content: "linkedIn",
                  offsetY: -100,
                  offsetX: 130,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=http://www.jndesigns.io/resume");
                    }
                },  {
                  type: "image",
                  content: "instagram",
                  offsetY: 100,
                  offsetX: -130,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=http://www.jndesigns.io/resume");
                    }
                },  {
                  type: "image",
                  content: "dribbble",
                  offsetY: 100,
                  offsetX: -0,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=http://www.jndesigns.io/resume");
                    }
                },  {
                  type: "image",
                  content: "Pinterest",
                  offsetY: 100,
                  offsetX: 130,
                  contentScale: 0.8,
                  callback: function () {
                      window.open(
                        "http://www.facebook.com/sharer.php?s=100&p[url]=http://www.jndesigns.io/resume");
                    }
                }

            ]
   });



}
