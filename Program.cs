using Microsoft.EntityFrameworkCore;
using pizzareact.Data;
using pizzareact.Data.Services;

var builder = WebApplication.CreateBuilder(args);

// DbContext configuration
builder.Services.AddDbContext<ApiDbContext>(options => 
    options.UseInMemoryDatabase(databaseName: "PizzaDb")
);

builder.Services.AddScoped<IPizzaService, PizzaService>();
builder.Services.AddScoped<ISizeService, SizeService>();
builder.Services.AddScoped<IToppingService, ToppingService>();
builder.Services.AddScoped<CartService>();


// Add services to the container.

builder.Services.AddControllers();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

DataGenerator.Initialize(app);

app.Run();
