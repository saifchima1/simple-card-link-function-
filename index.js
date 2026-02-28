// javascript here is saif's edit
class Link{
    constructor(button, link, blank) { //here i get the perameters
        this.button = button;
        this.link = link;
        this.blank = blank;
    }
    run() { //this is the main method to make the button functional
        if (!this.button){ //safety check if the button dont exist
            console.log("ERROR: the button don't exist!")
            return
        }
        this.button.style.cursor = 'pointer'; //when u hover over the button it changes the cursor to the pointer
        this.button.addEventListener("click", ()=>{ //this triggers a function when u click the button
            if (this.blank){ //if the blank is true it opens the url with target="_blank"
                window.open(this.link, '_blank');
                console.log("clicked");
            }else{
                window.open(this.link, '_self');
                console.log("clicked")
            }
            this.button.style.filter = 'brightness(35%)';
            setTimeout(()=>{this.button.style.filter = 'brightness(100%)';},500)

        });
        this.button.addEventListener("mouseover",()=>{ //some visual stuff when u hover over it it gets darker
            this.button.style.filter = 'brightness(75%)';
        })
        this.button.addEventListener("mouseleave",()=>{ //and if u take ur cursor away it gets bright like original
            this.button.style.filter = 'brightness(100%)';
        })
        }
};

const link_button = document.getElementById("link");
let google_link = "https://www.google.com/"; 
let google = new Link(link_button,google_link, true); //we make a variable for each class use so here we make one for the link u made
google.run(); //we use the run method from the Link class\


