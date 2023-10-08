﻿using Microsoft.AspNetCore.Mvc;
using pizzareact.Data.Services;
using pizzareact.Models;

namespace pizzareact.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApiController : ControllerBase {
        private readonly ISizeService _sizeService;
        private readonly IToppingService _toppingService;
        private readonly IPizzaService _pizzaService;
        public ApiController(ISizeService sizeService, IToppingService toppingService, IPizzaService pizzaService)
        {
            _pizzaService = pizzaService;
            _sizeService = sizeService;
            _toppingService = toppingService;
        }

        [HttpGet("get-pizzas")]
        public async Task<IEnumerable<Pizza>> GetPizzas() {
            var pizzas = await _pizzaService.GetAllAsync();
            return pizzas;
        }

        [HttpGet("get-sizes")]
        public async Task<IEnumerable<Size>> GetSizes() {
            var sizes = await _sizeService.GetAllAsync();
            return sizes;
        }

        [HttpGet("get-toppings")]
        public async Task<IEnumerable<Topping>> GetToppings() {
            var toppings = await _toppingService.GetAllAsync();
            return toppings;
        }
    }
}