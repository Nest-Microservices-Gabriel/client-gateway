import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from 'src/orders/enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Possible values are ${OrderStatusList.join(', ')}`,
  })
  status: OrderStatus;
}
