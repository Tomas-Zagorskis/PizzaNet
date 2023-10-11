using pizzareact.Data.Base;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models {
    public class Pizza : IEntityBase {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}
