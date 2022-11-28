function setUpTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {


            // locate sideBar
            let sideBar = button.parentElement;
            // locate tabsContainer
            let tabsContainer = sideBar.parentElement;
            let tabNumber = button.dataset.forTab;
            console.log("Click event on a button" + tabNumber);
            // locate tab to activate
            let tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tabs__button").forEach((button) => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    setUpTabs();
});