using pizzareact.Data.Enums;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models {
    public class Size {
        [Key]
        public int Id { get; set; }
        public PizzaSize PizzaSize { get; set; }
        public int SizeInCm { get; set; }
    }
}
