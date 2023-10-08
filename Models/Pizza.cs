using pizzareact.Data.Enums;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models {
    public class Pizza {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public Size Size { get; set; }
        public List<Topping> Toppings { get; set; }
    }
}
