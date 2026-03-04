window.addEventListener("load", () => {
    console.log("Update your browser dialog running...");
    new MutationObserver((mutations, outerObs) => {
      const host = [...document.querySelectorAll('*')].find(el => el.shadowRoot)
      if (!host) return

      new MutationObserver(() => {
        const dialog = host.shadowRoot.querySelector('[role="dialog"]')
        if (dialog?.textContent.includes('Update your browser')) {
          dialog.remove()
          console.log("Update your browser dialog hidden!");
        }
      }).observe(host.shadowRoot, { childList: true, subtree: true })

      outerObs.disconnect() // stop watching the outer DOM
    }).observe(document.body, { childList: true, subtree: true })
});
