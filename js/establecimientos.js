function filterProvince() {
  $("#provincias").change(function (e) {
    for (item of this.children) {
      if (
        $("#provincias option:selected").val() === item.value ||
        $("#provincias option:selected").val() == 0
      ) {
        $(`#${item.value}`).show();
      } else {
        $(`#${item.value}`).hide();
      }
    }
  });
}

$(document).ready(function () {
  filterProvince();
});
