/*
 * eiam-console - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.console.pojo.result.app;

import java.io.Serializable;
import java.time.LocalDateTime;

import cn.topiam.employee.common.enums.app.AppGroupType;

import lombok.Data;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * 分组列表返回
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2023/8/31 10:29
 */
@Data
@Schema(description = "分组列表返回")
public class AppGroupListResult implements Serializable {

    /**
     * ID
     */
    @Parameter(description = "ID")
    private String        id;

    /**
     * 分组名称
     */
    @Parameter(description = "分组名称")
    private String        name;

    /**
     * 分组编码
     */
    @Parameter(description = "分组编码")
    private String        code;

    /**
     * 分组类型
     */
    @Parameter(description = "分组类型")
    private AppGroupType  type;

    /**
     * 创建时间
     */
    @Parameter(description = "创建时间")
    private LocalDateTime createTime;

    /**
     * 备注
     */
    @Parameter(description = "备注")
    private String        remark;

}
