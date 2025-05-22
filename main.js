


// particles.js setup
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
  console.log('particles.js config loaded');
});



// collapsible section toggle
function toggleCollapse(btn) {
  const wrapper = btn.closest('.collapsible-wrapper');
  wrapper.classList.toggle('expanded');
  btn.textContent = wrapper.classList.contains('expanded') ? "Show less" : "Show more";
}

// menu toggle and shared behavior
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById("menu-toggle");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("active");
    });
  }

  // paired collapsible row behavior
  document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function () {
      const row = this.closest('.cot-row');
      if (!row) {
        toggleCollapse(this);
        return;
      }

      const blocks = row.querySelectorAll('.collapsible-wrapper');
      const isExpanding = !blocks[0].classList.contains('expanded');

      blocks.forEach(block => {
        block.classList.toggle('expanded', isExpanding);
      });

      row.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.textContent = isExpanding ? "Show less" : "Show more";
      });

      const clickedBlock = this.closest('.cot-block');
      const allBlocks = [...row.querySelectorAll('.cot-block')];
      const clickedIndex = allBlocks.indexOf(clickedBlock);
      const stickyBlock = allBlocks[1 - clickedIndex];

      if (isExpanding) {
        stickyBlock.classList.add('sticky-scroll');
      } else {
        stickyBlock.classList.remove('sticky-scroll');
      }
    });
  });

  // copy-to-clipboard
  

});

function copyCode(btn) {
  var codeBlock = btn.parentElement.querySelector("pre code");
  if (!codeBlock) return;
  var text = codeBlock.innerText;
  navigator.clipboard.writeText(text).then(function () {
    btn.innerText = "Copied!";
    setTimeout(function () {
      btn.innerText = "Copied";
    }, 2000);
  }, function (err) {
    console.error("Error while copying: ", err);
  });
}
