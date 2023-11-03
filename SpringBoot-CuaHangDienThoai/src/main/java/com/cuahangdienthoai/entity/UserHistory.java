package com.cuahangdienthoai.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "user_history")
public class UserHistory {
    @Id
    private Long user_id;

    private Long item_id;

    private Date timestamp;

    private Long rating;

    private Boolean buy;

}
